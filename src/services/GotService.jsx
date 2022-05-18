class GotService {
    _apiURL = 'https://thronesapi.com/api/v2/Characters';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiURL}`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiURL}/${id}`);
        return this._transformCharacter(res);
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            firstName: char.firstName,
            lastName: char.lastName,
            fullName: char.fullName,
            title: char.title,
            family: char.family,
            image: char.image,
            imageUrl: char.imageUrl
        }
    }
}

export default GotService;