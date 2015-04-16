(() => {

  Polymer('hawt-oauth', {
    clientId: '',
    authorizeUri: '',
    responseType: 'token',
    attached: function () {
      if (window.OAUTH_CONFIG) {
        this.clientId = this.clientId || window.OAUTH_CONFIG.clientId;
        this.authorizeUri = this.authorizeUri || window.OAUTH_CONFIG.authorizeUri;
      }

      if (this.clientId === '') {
        throw 'A valid clientId is required to use this element';
      }
      if (this.authorizeUri === '') {
        throw 'A valid authorizeUri is required to use this element';
      }

      var pageQueryParams = _.reduce(
        location.hash.replace(/^[?#]/, '' ).split( '&' ),
        function (parameters, parameter) {
          if (parameter.length > 0) {
            _.extend(parameters, _.object([ _.map(parameter.split('='), decodeURIComponent)]));
          }
          return parameters;
        },
        {}
      );

      if (pageQueryParams.access_token && pageQueryParams.token_type === 'bearer') {
        this.token = {
          access_token: pageQueryParams.access_token,
          token_type: pageQueryParams.token_type,
          expires_in: pageQueryParams.expires_in
        };
        this.$.localstorageToken.value = this.token;
        this.$.localstorageToken.save();
      }

      var self = this;

      $(document).bind('ajaxSend', function(event, jqxhr, ajaxOptions) {
        if (self.token && self.token.access_token) {
          jqxhr.setRequestHeader("Authorization", "Bearer " + self.token.access_token);
        }
      });
      $(document).bind('ajaxError', function(event, jqxhr, settings, thrownError) {
        if (jqxhr.status === 403 || jqxhr.status === 401) {
          delete self.token;
          self.$.localstorageToken.value = undefined;
          self.$.localstorageToken.save();
          var encodedCurrentUri = encodeURIComponent(window.location.href);
          var queryParams = {
            client_id: self.clientId,
            redirect_uri: encodedCurrentUri,
            response_type: self.responseType
          };

          var queryString = _.map(queryParams, function (value, key) {
            return key + '=' + value;
          }).join('&');

          window.location.href = self.authorizeUri + '?' + queryString;
        }
      });
    }
  });
})();
