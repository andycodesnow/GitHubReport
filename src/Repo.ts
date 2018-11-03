export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;

    /* Constructor for Repo */
    /*constructor(name: string, description: string, url: string, size: number, forkCount: number) {
        this.name = name;
        this.description = description;
        this.url = url;
        this.size = size;
        this.forkCount = forkCount;
    }*/

    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks;
    }
}