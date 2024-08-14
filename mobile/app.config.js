export default ({ config }) => {
    const environment = process.env.APP_ENV || 'production';

    return {
        ...config,
        name: environment === 'development' ? 'ScanForge Dev' : config.name,
        android: {
            ...config.android,
            package: environment === 'development' ? 'com.ScanForge.dev' : config.android.package,
        }
    };
};