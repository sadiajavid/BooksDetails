
export class Model {
    constructor(private accessToken: string, private ExpirationDate: Date ) { }
    get token(): string | null {
        if (!this.ExpirationDate || new Date() > this.ExpirationDate) {
            return null;
        }
        return this.accessToken;
    }
}
