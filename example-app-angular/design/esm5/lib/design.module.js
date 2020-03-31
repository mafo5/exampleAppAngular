import { NgModule } from '@angular/core';
import { AtomModule } from './atom/atom.module';
import { MoleculeModule } from './molecule/molecule.module';
import { OrganismModule } from './organism/organism.module';
import { TokenModule } from './token/token.module';
import * as i0 from "@angular/core";
var DesignModule = /** @class */ (function () {
    function DesignModule() {
    }
    DesignModule.ɵmod = i0.ɵɵdefineNgModule({ type: DesignModule });
    DesignModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DesignModule_Factory(t) { return new (t || DesignModule)(); }, imports: [[
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
export { DesignModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DesignModule, { imports: [TokenModule,
        AtomModule,
        MoleculeModule,
        OrganismModule], exports: [TokenModule,
        AtomModule,
        MoleculeModule,
        OrganismModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DesignModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BleGFtcGxlLWFwcC1hbmd1bGFyL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImxpYi9kZXNpZ24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVuRDtJQUFBO0tBZTZCO29EQUFoQixZQUFZOzJHQUFaLFlBQVksa0JBYmQ7Z0JBQ1AsV0FBVztnQkFDWCxVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsY0FBYzthQUNmO1lBRUMsV0FBVztZQUNYLFVBQVU7WUFDVixjQUFjO1lBQ2QsY0FBYzt1QkFuQmxCO0NBc0I2QixBQWY3QixJQWU2QjtTQUFoQixZQUFZO3dGQUFaLFlBQVksY0FackIsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO1FBQ2QsY0FBYyxhQUdkLFdBQVc7UUFDWCxVQUFVO1FBQ1YsY0FBYztRQUNkLGNBQWM7a0RBR0wsWUFBWTtjQWZ4QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsY0FBYztvQkFDZCxjQUFjO2lCQUNmO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdG9tTW9kdWxlIH0gZnJvbSAnLi9hdG9tL2F0b20ubW9kdWxlJztcbmltcG9ydCB7IE1vbGVjdWxlTW9kdWxlIH0gZnJvbSAnLi9tb2xlY3VsZS9tb2xlY3VsZS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JnYW5pc21Nb2R1bGUgfSBmcm9tICcuL29yZ2FuaXNtL29yZ2FuaXNtLm1vZHVsZSc7XG5pbXBvcnQgeyBUb2tlbk1vZHVsZSB9IGZyb20gJy4vdG9rZW4vdG9rZW4ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIFRva2VuTW9kdWxlLFxuICAgIEF0b21Nb2R1bGUsXG4gICAgTW9sZWN1bGVNb2R1bGUsXG4gICAgT3JnYW5pc21Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUb2tlbk1vZHVsZSxcbiAgICBBdG9tTW9kdWxlLFxuICAgIE1vbGVjdWxlTW9kdWxlLFxuICAgIE9yZ2FuaXNtTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERlc2lnbk1vZHVsZSB7IH1cbiJdfQ==