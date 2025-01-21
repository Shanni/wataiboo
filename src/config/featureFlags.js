const ENV = process.env.REACT_APP_ENV || 'production';

export const FEATURES = {
    SHOW_VOTES: ENV === 'dev',
    SHOW_REFRESH: ENV === 'dev',  // New feature flag for refresh button
    // Add more feature flags here as needed
}; 