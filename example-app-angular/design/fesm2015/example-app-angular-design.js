import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class TokenModule {
}
TokenModule.ɵmod = ɵɵdefineNgModule({ type: TokenModule });
TokenModule.ɵinj = ɵɵdefineInjector({ factory: function TokenModule_Factory(t) { return new (t || TokenModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TokenModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TokenModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();

class IconComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = ɵɵdefineComponent({ type: IconComponent, selectors: [["design-icon"]], decls: 2, vars: 0, template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "icon works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'design-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.scss']
            }]
    }], function () { return []; }, null); })();

class AtomModule {
}
AtomModule.ɵmod = ɵɵdefineNgModule({ type: AtomModule });
AtomModule.ɵinj = ɵɵdefineInjector({ factory: function AtomModule_Factory(t) { return new (t || AtomModule)(); }, imports: [[
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AtomModule, { declarations: [IconComponent], imports: [CommonModule], exports: [IconComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AtomModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    IconComponent,
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    IconComponent,
                ]
            }]
    }], null, null); })();

class MoleculeModule {
}
MoleculeModule.ɵmod = ɵɵdefineNgModule({ type: MoleculeModule });
MoleculeModule.ɵinj = ɵɵdefineInjector({ factory: function MoleculeModule_Factory(t) { return new (t || MoleculeModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MoleculeModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MoleculeModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();

class OrganismModule {
}
OrganismModule.ɵmod = ɵɵdefineNgModule({ type: OrganismModule });
OrganismModule.ɵinj = ɵɵdefineInjector({ factory: function OrganismModule_Factory(t) { return new (t || OrganismModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(OrganismModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(OrganismModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();

class DesignModule {
}
DesignModule.ɵmod = ɵɵdefineNgModule({ type: DesignModule });
DesignModule.ɵinj = ɵɵdefineInjector({ factory: function DesignModule_Factory(t) { return new (t || DesignModule)(); }, imports: [[
            TokenModule,
            AtomModule,
            MoleculeModule,
            OrganismModule,
        ],
        TokenModule,
        AtomModule,
        MoleculeModule,
        OrganismModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DesignModule, { imports: [TokenModule,
        AtomModule,
        MoleculeModule,
        OrganismModule], exports: [TokenModule,
        AtomModule,
        MoleculeModule,
        OrganismModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DesignModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    TokenModule,
                    AtomModule,
                    MoleculeModule,
                    OrganismModule,
                ],
                exports: [
                    TokenModule,
                    AtomModule,
                    MoleculeModule,
                    OrganismModule,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of design
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AtomModule, DesignModule, IconComponent, MoleculeModule, OrganismModule, TokenModule };
//# sourceMappingURL=example-app-angular-design.js.map
