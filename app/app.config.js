/**
 * Created by Dood on 02/12/2016.
 */
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($q) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                config.headers.Authorization = 'fc0df77a54494178803a11aa25b36e2f';
                return config || $q.when(config);
            }
        };
    });
});