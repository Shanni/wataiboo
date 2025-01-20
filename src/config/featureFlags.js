const ENV = process.env.REACT_APP_ENV || 'production';

export const FEATURES = {
    SHOW_VOTES: ENV === 'dev',
    // Add more feature flags here as needed
}; 