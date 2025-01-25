async function cleanUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.origin;
    } catch (e) {
        return url;
    }
}

async function resolveUrl(url) {
    // Check if we're in Node.js environment (for CLI usage)
    if (typeof window === 'undefined') {
        return resolveUrlNode(url);
    }

    // Browser environment using fetch
    try {
        const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
        return {
            originalUrl: url,
            finalUrl: await cleanUrl(response.url),
            statusCode: response.status
        };
    } catch (error) {
        console.error('Error resolving URL:', error);
        return {
            originalUrl: url,
            finalUrl: await cleanUrl(url),
            statusCode: 0
        };
    }
}

// Node.js version for CLI
async function resolveUrlNode(url) {
    const https = require('https');
    const http = require('http');

    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        const request = protocol.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                resolveUrlNode(response.headers.location)
                    .then(resolve)
                    .catch(reject);
            } else {
                const finalUrl = response.responseUrl || url;
                resolve({
                    originalUrl: url,
                    finalUrl: cleanUrl(finalUrl),
                    statusCode: response.statusCode
                });
            }
        });

        request.on('error', (error) => {
            reject(error);
        });
    });
}

// CLI handler
if (typeof window === 'undefined' && require.main === module) {
    const url = process.argv[2];
    if (!url) {
        console.error('Please provide a URL as an argument');
        process.exit(1);
    }

    resolveUrl(url)
        .then(result => {
            console.log('Original URL:', result.originalUrl);
            console.log('Clean Domain:', result.finalUrl);
            console.log('Status Code:', result.statusCode);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

module.exports = resolveUrl; 