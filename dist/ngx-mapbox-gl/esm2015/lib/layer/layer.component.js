/**
 * @fileoverview added by tsickle
 * Generated from: lib/layer/layer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, mapTo, switchMap, startWith } from 'rxjs/operators';
import { MapService } from '../map/map.service';
export class LayerComponent {
    /**
     * @param {?} MapService
     */
    constructor(MapService) {
        this.MapService = MapService;
        this.click = new EventEmitter();
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
        this.mouseMove = new EventEmitter();
        this.layerAdded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.MapService.mapLoaded$.pipe(switchMap((/**
         * @return {?}
         */
        () => fromEvent((/** @type {?} */ (this.MapService.mapInstance)), 'styledata').pipe(mapTo(false), filter((/**
         * @return {?}
         */
        () => !this.MapService.mapInstance.getLayer(this.id))), startWith(true))))).subscribe((/**
         * @param {?} bindEvents
         * @return {?}
         */
        (bindEvents) => this.init(bindEvents)));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.layerAdded) {
            return;
        }
        if (changes.paint && !changes.paint.isFirstChange()) {
            this.MapService.setAllLayerPaintProperty(this.id, (/** @type {?} */ (changes.paint.currentValue)));
        }
        if (changes.layout && !changes.layout.isFirstChange()) {
            this.MapService.setAllLayerLayoutProperty(this.id, (/** @type {?} */ (changes.layout.currentValue)));
        }
        if (changes.filter && !changes.filter.isFirstChange()) {
            this.MapService.setLayerFilter(this.id, (/** @type {?} */ (changes.filter.currentValue)));
        }
        if (changes.before && !changes.before.isFirstChange()) {
            this.MapService.setLayerBefore(this.id, (/** @type {?} */ (changes.before.currentValue)));
        }
        if (changes.minzoom && !changes.minzoom.isFirstChange() ||
            changes.maxzoom && !changes.maxzoom.isFirstChange()) {
            this.MapService.setLayerZoomRange(this.id, this.minzoom, this.maxzoom);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.layerAdded) {
            this.MapService.removeLayer(this.id);
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} bindEvents
     * @return {?}
     */
    init(bindEvents) {
        /** @type {?} */
        const layer = {
            layerOptions: {
                id: this.id,
                type: this.type,
                source: this.source,
                metadata: this.metadata,
                'source-layer': this.sourceLayer,
                minzoom: this.minzoom,
                maxzoom: this.maxzoom,
                filter: this.filter,
                layout: this.layout,
                paint: this.paint
            },
            layerEvents: {
                click: this.click,
                mouseEnter: this.mouseEnter,
                mouseLeave: this.mouseLeave,
                mouseMove: this.mouseMove
            }
        };
        this.MapService.addLayer(layer, bindEvents, this.before);
        this.layerAdded = true;
    }
}
LayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mgl-layer',
                template: ''
            }] }
];
/** @nocollapse */
LayerComponent.ctorParameters = () => [
    { type: MapService }
];
LayerComponent.propDecorators = {
    id: [{ type: Input }],
    source: [{ type: Input }],
    type: [{ type: Input }],
    metadata: [{ type: Input }],
    sourceLayer: [{ type: Input }],
    filter: [{ type: Input }],
    layout: [{ type: Input }],
    paint: [{ type: Input }],
    before: [{ type: Input }],
    minzoom: [{ type: Input }],
    maxzoom: [{ type: Input }],
    click: [{ type: Output }],
    mouseEnter: [{ type: Output }],
    mouseLeave: [{ type: Output }],
    mouseMove: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LayerComponent.prototype.id;
    /** @type {?} */
    LayerComponent.prototype.source;
    /** @type {?} */
    LayerComponent.prototype.type;
    /** @type {?} */
    LayerComponent.prototype.metadata;
    /** @type {?} */
    LayerComponent.prototype.sourceLayer;
    /** @type {?} */
    LayerComponent.prototype.filter;
    /** @type {?} */
    LayerComponent.prototype.layout;
    /** @type {?} */
    LayerComponent.prototype.paint;
    /** @type {?} */
    LayerComponent.prototype.before;
    /** @type {?} */
    LayerComponent.prototype.minzoom;
    /** @type {?} */
    LayerComponent.prototype.maxzoom;
    /** @type {?} */
    LayerComponent.prototype.click;
    /** @type {?} */
    LayerComponent.prototype.mouseEnter;
    /** @type {?} */
    LayerComponent.prototype.mouseLeave;
    /** @type {?} */
    LayerComponent.prototype.mouseMove;
    /**
     * @type {?}
     * @private
     */
    LayerComponent.prototype.layerAdded;
    /**
     * @type {?}
     * @private
     */
    LayerComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    LayerComponent.prototype.MapService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcGJveC1nbC8iLCJzb3VyY2VzIjpbImxpYi9sYXllci9sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBeUJ2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTWhELE1BQU0sT0FBTyxjQUFjOzs7O0lBd0J6QixZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFUdEIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQy9DLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUNwRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBRXJELGVBQVUsR0FBRyxLQUFLLENBQUM7SUFLdkIsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDeEMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLG1CQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFBLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMzRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ1osTUFBTTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQzVELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDaEIsRUFBQyxDQUNILENBQUMsU0FBUzs7OztRQUFDLENBQUMsVUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLG1CQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztTQUNoRjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLG1CQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQztTQUNsRjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxtQkFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsbUJBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFDRSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDbkQsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQ25EO1lBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7OztJQUVPLElBQUksQ0FBQyxVQUFtQjs7Y0FDeEIsS0FBSyxHQUFHO1lBQ1osWUFBWSxFQUFFO2dCQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBTFEsVUFBVTs7O2lCQVFoQixLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBR0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBRUwsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07d0JBQ04sTUFBTTs7OztJQWpCUCw0QkFBb0I7O0lBQ3BCLGdDQUFzSDs7SUFDdEgsOEJBQWtHOztJQUNsRyxrQ0FBd0I7O0lBQ3hCLHFDQUE4Qjs7SUFHOUIsZ0NBQXdCOztJQUN4QixnQ0FBZ0k7O0lBQ2hJLCtCQUF3SDs7SUFDeEgsZ0NBQXlCOztJQUN6QixpQ0FBMEI7O0lBQzFCLGlDQUEwQjs7SUFFMUIsK0JBQXlEOztJQUN6RCxvQ0FBOEQ7O0lBQzlELG9DQUE4RDs7SUFDOUQsbUNBQTZEOzs7OztJQUU3RCxvQ0FBMkI7Ozs7O0lBQzNCLDZCQUEwQjs7Ozs7SUFHeEIsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBCYWNrZ3JvdW5kTGF5b3V0LFxuICBCYWNrZ3JvdW5kUGFpbnQsXG4gIENpcmNsZUxheW91dCxcbiAgQ2lyY2xlUGFpbnQsXG4gIEZpbGxFeHRydXNpb25MYXlvdXQsXG4gIEZpbGxFeHRydXNpb25QYWludCxcbiAgRmlsbExheW91dCxcbiAgRmlsbFBhaW50LFxuICBHZW9KU09OU291cmNlLFxuICBHZW9KU09OU291cmNlUmF3LFxuICBJbWFnZVNvdXJjZSxcbiAgTGF5ZXIsXG4gIExpbmVMYXlvdXQsXG4gIExpbmVQYWludCxcbiAgUmFzdGVyTGF5b3V0LFxuICBSYXN0ZXJQYWludCxcbiAgUmFzdGVyU291cmNlLFxuICBTeW1ib2xMYXlvdXQsXG4gIFN5bWJvbFBhaW50LFxuICBWZWN0b3JTb3VyY2UsXG4gIFZpZGVvU291cmNlLFxuICBNYXBMYXllck1vdXNlRXZlbnRcbn0gZnJvbSAnbWFwYm94LWdsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcFRvLCBzd2l0Y2hNYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9tYXAvbWFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZ2wtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBMYXllciB7XG4gIC8qIEluaXQgaW5wdXRzICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNvdXJjZT86IHN0cmluZyB8IFZlY3RvclNvdXJjZSB8IFJhc3RlclNvdXJjZSB8IEdlb0pTT05Tb3VyY2UgfCBJbWFnZVNvdXJjZSB8IFZpZGVvU291cmNlIHwgR2VvSlNPTlNvdXJjZVJhdztcbiAgQElucHV0KCkgdHlwZTogJ3N5bWJvbCcgfCAnZmlsbCcgfCAnbGluZScgfCAnY2lyY2xlJyB8ICdmaWxsLWV4dHJ1c2lvbicgfCAncmFzdGVyJyB8ICdiYWNrZ3JvdW5kJztcbiAgQElucHV0KCkgbWV0YWRhdGE/OiBhbnk7XG4gIEBJbnB1dCgpIHNvdXJjZUxheWVyPzogc3RyaW5nO1xuXG4gIC8qIER5bmFtaWMgaW5wdXRzICovXG4gIEBJbnB1dCgpIGZpbHRlcj86IGFueVtdO1xuICBASW5wdXQoKSBsYXlvdXQ/OiBCYWNrZ3JvdW5kTGF5b3V0IHwgRmlsbExheW91dCB8IEZpbGxFeHRydXNpb25MYXlvdXQgfCBMaW5lTGF5b3V0IHwgU3ltYm9sTGF5b3V0IHwgUmFzdGVyTGF5b3V0IHwgQ2lyY2xlTGF5b3V0O1xuICBASW5wdXQoKSBwYWludD86IEJhY2tncm91bmRQYWludCB8IEZpbGxQYWludCB8IEZpbGxFeHRydXNpb25QYWludCB8IExpbmVQYWludCB8IFN5bWJvbFBhaW50IHwgUmFzdGVyUGFpbnQgfCBDaXJjbGVQYWludDtcbiAgQElucHV0KCkgYmVmb3JlPzogc3RyaW5nO1xuICBASW5wdXQoKSBtaW56b29tPzogbnVtYmVyO1xuICBASW5wdXQoKSBtYXh6b29tPzogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTGF5ZXJNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTGF5ZXJNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwTGF5ZXJNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgbW91c2VNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBMYXllck1vdXNlRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBsYXllckFkZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBNYXBTZXJ2aWNlOiBNYXBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWIgPSB0aGlzLk1hcFNlcnZpY2UubWFwTG9hZGVkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IGZyb21FdmVudCg8YW55PnRoaXMuTWFwU2VydmljZS5tYXBJbnN0YW5jZSwgJ3N0eWxlZGF0YScpLnBpcGUoXG4gICAgICAgIG1hcFRvKGZhbHNlKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLk1hcFNlcnZpY2UubWFwSW5zdGFuY2UuZ2V0TGF5ZXIodGhpcy5pZCkpLFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSlcbiAgICAgICkpLFxuICAgICkuc3Vic2NyaWJlKChiaW5kRXZlbnRzOiBib29sZWFuKSA9PiB0aGlzLmluaXQoYmluZEV2ZW50cykpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5sYXllckFkZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnBhaW50ICYmICFjaGFuZ2VzLnBhaW50LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnNldEFsbExheWVyUGFpbnRQcm9wZXJ0eSh0aGlzLmlkLCBjaGFuZ2VzLnBhaW50LmN1cnJlbnRWYWx1ZSEpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5sYXlvdXQgJiYgIWNoYW5nZXMubGF5b3V0LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5NYXBTZXJ2aWNlLnNldEFsbExheWVyTGF5b3V0UHJvcGVydHkodGhpcy5pZCwgY2hhbmdlcy5sYXlvdXQuY3VycmVudFZhbHVlISk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmZpbHRlciAmJiAhY2hhbmdlcy5maWx0ZXIuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2Uuc2V0TGF5ZXJGaWx0ZXIodGhpcy5pZCwgY2hhbmdlcy5maWx0ZXIuY3VycmVudFZhbHVlISk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmJlZm9yZSAmJiAhY2hhbmdlcy5iZWZvcmUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2Uuc2V0TGF5ZXJCZWZvcmUodGhpcy5pZCwgY2hhbmdlcy5iZWZvcmUuY3VycmVudFZhbHVlISk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNoYW5nZXMubWluem9vbSAmJiAhY2hhbmdlcy5taW56b29tLmlzRmlyc3RDaGFuZ2UoKSB8fFxuICAgICAgY2hhbmdlcy5tYXh6b29tICYmICFjaGFuZ2VzLm1heHpvb20uaXNGaXJzdENoYW5nZSgpXG4gICAgKSB7XG4gICAgICB0aGlzLk1hcFNlcnZpY2Uuc2V0TGF5ZXJab29tUmFuZ2UodGhpcy5pZCwgdGhpcy5taW56b29tLCB0aGlzLm1heHpvb20pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyQWRkZWQpIHtcbiAgICAgIHRoaXMuTWFwU2VydmljZS5yZW1vdmVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdChiaW5kRXZlbnRzOiBib29sZWFuKSB7XG4gICAgY29uc3QgbGF5ZXIgPSB7XG4gICAgICBsYXllck9wdGlvbnM6IHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgbWV0YWRhdGE6IHRoaXMubWV0YWRhdGEsXG4gICAgICAgICdzb3VyY2UtbGF5ZXInOiB0aGlzLnNvdXJjZUxheWVyLFxuICAgICAgICBtaW56b29tOiB0aGlzLm1pbnpvb20sXG4gICAgICAgIG1heHpvb206IHRoaXMubWF4em9vbSxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgbGF5b3V0OiB0aGlzLmxheW91dCxcbiAgICAgICAgcGFpbnQ6IHRoaXMucGFpbnRcbiAgICAgIH0sXG4gICAgICBsYXllckV2ZW50czoge1xuICAgICAgICBjbGljazogdGhpcy5jbGljayxcbiAgICAgICAgbW91c2VFbnRlcjogdGhpcy5tb3VzZUVudGVyLFxuICAgICAgICBtb3VzZUxlYXZlOiB0aGlzLm1vdXNlTGVhdmUsXG4gICAgICAgIG1vdXNlTW92ZTogdGhpcy5tb3VzZU1vdmVcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuTWFwU2VydmljZS5hZGRMYXllcihsYXllciwgYmluZEV2ZW50cywgdGhpcy5iZWZvcmUpO1xuICAgIHRoaXMubGF5ZXJBZGRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==