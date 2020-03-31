(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@example-app-angular/design', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['example-app-angular'] = global['example-app-angular'] || {}, global['example-app-angular'].design = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var TokenModule = /** @class */ (function () {
        function TokenModule() {
        }
        TokenModule.ɵmod = core["ɵɵdefineNgModule"]({ type: TokenModule });
        TokenModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function TokenModule_Factory(t) { return new (t || TokenModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return TokenModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](TokenModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TokenModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        common.CommonModule
                    ]
                }]
        }], null, null); })();

    var IconComponent = /** @class */ (function () {
        function IconComponent() {
        }
        IconComponent.prototype.ngOnInit = function () {
        };
        IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
        IconComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["design-icon"]], decls: 2, vars: 0, template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, "icon works!");
                core["ɵɵelementEnd"]();
            } }, styles: [""] });
        return IconComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](IconComponent, [{
            type: core.Component,
            args: [{
                    selector: 'design-icon',
                    templateUrl: './icon.component.html',
                    styleUrls: ['./icon.component.scss']
                }]
        }], function () { return []; }, null); })();

    var AtomModule = /** @class */ (function () {
        function AtomModule() {
        }
        AtomModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AtomModule });
        AtomModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AtomModule_Factory(t) { return new (t || AtomModule)(); }, imports: [[
                    common.CommonModule,
                ]] });
        return AtomModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](AtomModule, { declarations: [IconComponent], imports: [common.CommonModule], exports: [IconComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AtomModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        IconComponent,
                    ],
                    imports: [
                        common.CommonModule,
                    ],
                    exports: [
                        IconComponent,
                    ]
                }]
        }], null, null); })();

    var MoleculeModule = /** @class */ (function () {
        function MoleculeModule() {
        }
        MoleculeModule.ɵmod = core["ɵɵdefineNgModule"]({ type: MoleculeModule });
        MoleculeModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function MoleculeModule_Factory(t) { return new (t || MoleculeModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return MoleculeModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](MoleculeModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MoleculeModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        common.CommonModule
                    ]
                }]
        }], null, null); })();

    var OrganismModule = /** @class */ (function () {
        function OrganismModule() {
        }
        OrganismModule.ɵmod = core["ɵɵdefineNgModule"]({ type: OrganismModule });
        OrganismModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function OrganismModule_Factory(t) { return new (t || OrganismModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return OrganismModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](OrganismModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OrganismModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        common.CommonModule
                    ]
                }]
        }], null, null); })();

    var DesignModule = /** @class */ (function () {
        function DesignModule() {
        }
        DesignModule.ɵmod = core["ɵɵdefineNgModule"]({ type: DesignModule });
        DesignModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function DesignModule_Factory(t) { return new (t || DesignModule)(); }, imports: [[
                    TokenModule,
                    AtomModule,
                    MoleculeModule,
                    OrganismModule,
                ],
                TokenModule,
                AtomModule,
                MoleculeModule,
                OrganismModule] });
        return DesignModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](DesignModule, { imports: [TokenModule,
            AtomModule,
            MoleculeModule,
            OrganismModule], exports: [TokenModule,
            AtomModule,
            MoleculeModule,
            OrganismModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DesignModule, [{
            type: core.NgModule,
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

    exports.AtomModule = AtomModule;
    exports.DesignModule = DesignModule;
    exports.IconComponent = IconComponent;
    exports.MoleculeModule = MoleculeModule;
    exports.OrganismModule = OrganismModule;
    exports.TokenModule = TokenModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=example-app-angular-design.umd.js.map
