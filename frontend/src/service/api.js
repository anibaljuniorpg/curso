const API_URL = 'https://curso-deploy.onrender.com';

export async function fetchApi(path, options = {}) {
    const response = await fetch(`${API_URL}/${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {})
        },
        ...options
    });

    if (!response.ok) {
        throw new Error('Erro na requisição');
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
}
