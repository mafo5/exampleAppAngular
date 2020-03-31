import { NgModule } from '@angular/core';
import { AtomModule } from './atom/atom.module';
import { MoleculeModule } from './molecule/molecule.module';
import { OrganismModule } from './organism/organism.module';
import { TokenModule } from './token/token.module';
import * as i0 from "@angular/core";
export class DesignModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BleGFtcGxlLWFwcC1hbmd1bGFyL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImxpYi9kZXNpZ24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQWlCbkQsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxrQkFiZDtZQUNQLFdBQVc7WUFDWCxVQUFVO1lBQ1YsY0FBYztZQUNkLGNBQWM7U0FDZjtRQUVDLFdBQVc7UUFDWCxVQUFVO1FBQ1YsY0FBYztRQUNkLGNBQWM7d0ZBR0wsWUFBWSxjQVpyQixXQUFXO1FBQ1gsVUFBVTtRQUNWLGNBQWM7UUFDZCxjQUFjLGFBR2QsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjO1FBQ2QsY0FBYztrREFHTCxZQUFZO2NBZnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixjQUFjO29CQUNkLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixjQUFjO29CQUNkLGNBQWM7aUJBQ2Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF0b21Nb2R1bGUgfSBmcm9tICcuL2F0b20vYXRvbS5tb2R1bGUnO1xuaW1wb3J0IHsgTW9sZWN1bGVNb2R1bGUgfSBmcm9tICcuL21vbGVjdWxlL21vbGVjdWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmdhbmlzbU1vZHVsZSB9IGZyb20gJy4vb3JnYW5pc20vb3JnYW5pc20ubW9kdWxlJztcbmltcG9ydCB7IFRva2VuTW9kdWxlIH0gZnJvbSAnLi90b2tlbi90b2tlbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgVG9rZW5Nb2R1bGUsXG4gICAgQXRvbU1vZHVsZSxcbiAgICBNb2xlY3VsZU1vZHVsZSxcbiAgICBPcmdhbmlzbU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRva2VuTW9kdWxlLFxuICAgIEF0b21Nb2R1bGUsXG4gICAgTW9sZWN1bGVNb2R1bGUsXG4gICAgT3JnYW5pc21Nb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGVzaWduTW9kdWxlIHsgfVxuIl19