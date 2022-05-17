class GotService {
    _apiURL = 'https://thronesapi.com/api/v2/Characters';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiURL}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiURL}/${id}`);
    }
}

export default GotService;