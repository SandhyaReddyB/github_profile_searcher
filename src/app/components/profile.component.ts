import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component ({
    //moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'

})

export class ProfileComponent {
    user: any;
    repos:any[];
    username: string;
    constructor (private githubservice: GithubService) {
        this.user=false;
    }
    searchGithubUser(){
        this.githubservice.updateUser(this.username);
        this.githubservice.getUser().subscribe (
            user => this.user=user
        );
        this.githubservice.getRepos().subscribe (
            repos => this.repos = repos
        );
    }

}