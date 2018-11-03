import { Repo } from "./Repo";

export class User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos?: Repo[];

    /* Contructor for User */ 
    /*constructor(login: string, fullName: string, repoCount: number, followerCount: number, repos: Repo[]) {
        this.login = login;
        this.fullName = fullName;
        this.repoCount = repoCount;
        this.followerCount = followerCount;
        this.repos = repos;
    }*/

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.repos = userResponse.;
    }
}