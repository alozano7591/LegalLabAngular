# LegalLabAng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Create AppRoutingModule

Run `ng generate module app-routing --flat --module=app`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

`ng build --configuration production` For more lightweight

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Bootstrap help

This has ng bootstrap

## Angular git hub pages

`ng new myApp --directory ./`

`ng add angular-cli-ghpages`  install cli-ghpages to project

`ng deploy --base-href=https://GithubUserName.github.io/GithubRepoName/` make build, but will need to copy and past contents to docs folder

`ng deploy --base-href=https://alozano7591.github.io/LegalLabAngular/` the exact command to deploy

`ng build --configuration production --output-path docs --base-href=https://alozano7591.github.io/LegalLabAngular/` another option for building to path docs and then to base-href

github build requires a copy of index to 404.html, otherwise refreshing or going directly to pages beyond index will get 404 error.

https://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-the-browser


## legallab (godaddy)

`ng build --base-href /legallab.ca/` This will simply go to dist folder instead of docs, keeping the builds separate 

`ng build --configuration production --base-href=https://legallab.ca/`

`ng build --configuration production` To create with default base-href (the correct choice - build is in root folder)
