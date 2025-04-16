export default class Header {
    constructor (page){
        this._page = page
        this._accountButton = page.locator('.mat-toolbar-row > .mat-menu-trigger  .avatar-size-medium.user-avatar')
    }
}