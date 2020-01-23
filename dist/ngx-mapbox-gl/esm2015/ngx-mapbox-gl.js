/**
 * @fileoverview added by tsickle
 * Generated from: ngx-mapbox-gl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { MAPBOX_GEOCODER_API_KEY, NgxMapboxGLModule, CustomControl, ControlComponent, MAPBOX_API_KEY, MglResizeEventEmitter, MapService, MapComponent, GeoJSONSourceComponent } from './public_api';
export { AttributionControlDirective as ɵp } from './lib/control/attribution-control.directive';
export { FullscreenControlDirective as ɵm } from './lib/control/fullscreen-control.directive';
export { GeocoderControlDirective as ɵa } from './lib/control/geocoder-control.directive';
export { GeolocateControlDirective as ɵo } from './lib/control/geolocate-control.directive';
export { NavigationControlDirective as ɵn } from './lib/control/navigation-control.directive';
export { ScaleControlDirective as ɵq } from './lib/control/scale-control.directive';
export { DraggableDirective as ɵc } from './lib/draggable/draggable.directive';
export { ImageComponent as ɵf } from './lib/image/image.component';
export { LayerComponent as ɵb } from './lib/layer/layer.component';
export { MarkerComponent as ɵe } from './lib/marker/marker.component';
export { ClusterPointDirective as ɵs, MarkersForClustersComponent as ɵt, PointDirective as ɵr } from './lib/markers-for-clusters/markers-for-clusters.component';
export { PopupComponent as ɵl } from './lib/popup/popup.component';
export { CanvasSourceComponent as ɵk } from './lib/source/canvas-source.component';
export { FeatureComponent as ɵd } from './lib/source/geojson/feature.component';
export { ImageSourceComponent as ɵi } from './lib/source/image-source.component';
export { RasterSourceComponent as ɵh } from './lib/source/raster-source.component';
export { VectorSourceComponent as ɵg } from './lib/source/vector-source.component';
export { VideoSourceComponent as ɵj } from './lib/source/video-source.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hcGJveC1nbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXBib3gtZ2wvIiwic291cmNlcyI6WyJuZ3gtbWFwYm94LWdsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEscUxBQWMsY0FBYyxDQUFDO0FBRTdCLE9BQU8sRUFBQywyQkFBMkIsSUFBSSxFQUFFLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RixPQUFPLEVBQUMsMEJBQTBCLElBQUksRUFBRSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHdCQUF3QixJQUFJLEVBQUUsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx5QkFBeUIsSUFBSSxFQUFFLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUMsMEJBQTBCLElBQUksRUFBRSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxrQkFBa0IsSUFBSSxFQUFFLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxJQUFJLEVBQUUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLElBQUksRUFBRSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLElBQUksRUFBRSxFQUFDLDJCQUEyQixJQUFJLEVBQUUsRUFBQyxjQUFjLElBQUksRUFBRSxFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDN0osT0FBTyxFQUFDLGNBQWMsSUFBSSxFQUFFLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUMscUJBQXFCLElBQUksRUFBRSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixJQUFJLEVBQUUsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxFQUFFLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLElBQUksRUFBRSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsSUFBSSxFQUFFLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNfYXBpJztcblxuZXhwb3J0IHtBdHRyaWJ1dGlvbkNvbnRyb2xEaXJlY3RpdmUgYXMgybVwfSBmcm9tICcuL2xpYi9jb250cm9sL2F0dHJpYnV0aW9uLWNvbnRyb2wuZGlyZWN0aXZlJztcbmV4cG9ydCB7RnVsbHNjcmVlbkNvbnRyb2xEaXJlY3RpdmUgYXMgybVtfSBmcm9tICcuL2xpYi9jb250cm9sL2Z1bGxzY3JlZW4tY29udHJvbC5kaXJlY3RpdmUnO1xuZXhwb3J0IHtHZW9jb2RlckNvbnRyb2xEaXJlY3RpdmUgYXMgybVhfSBmcm9tICcuL2xpYi9jb250cm9sL2dlb2NvZGVyLWNvbnRyb2wuZGlyZWN0aXZlJztcbmV4cG9ydCB7R2VvbG9jYXRlQ29udHJvbERpcmVjdGl2ZSBhcyDJtW99IGZyb20gJy4vbGliL2NvbnRyb2wvZ2VvbG9jYXRlLWNvbnRyb2wuZGlyZWN0aXZlJztcbmV4cG9ydCB7TmF2aWdhdGlvbkNvbnRyb2xEaXJlY3RpdmUgYXMgybVufSBmcm9tICcuL2xpYi9jb250cm9sL25hdmlnYXRpb24tY29udHJvbC5kaXJlY3RpdmUnO1xuZXhwb3J0IHtTY2FsZUNvbnRyb2xEaXJlY3RpdmUgYXMgybVxfSBmcm9tICcuL2xpYi9jb250cm9sL3NjYWxlLWNvbnRyb2wuZGlyZWN0aXZlJztcbmV4cG9ydCB7RHJhZ2dhYmxlRGlyZWN0aXZlIGFzIMm1Y30gZnJvbSAnLi9saWIvZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHtJbWFnZUNvbXBvbmVudCBhcyDJtWZ9IGZyb20gJy4vbGliL2ltYWdlL2ltYWdlLmNvbXBvbmVudCc7XG5leHBvcnQge0xheWVyQ29tcG9uZW50IGFzIMm1Yn0gZnJvbSAnLi9saWIvbGF5ZXIvbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCB7TWFya2VyQ29tcG9uZW50IGFzIMm1ZX0gZnJvbSAnLi9saWIvbWFya2VyL21hcmtlci5jb21wb25lbnQnO1xuZXhwb3J0IHtDbHVzdGVyUG9pbnREaXJlY3RpdmUgYXMgybVzLE1hcmtlcnNGb3JDbHVzdGVyc0NvbXBvbmVudCBhcyDJtXQsUG9pbnREaXJlY3RpdmUgYXMgybVyfSBmcm9tICcuL2xpYi9tYXJrZXJzLWZvci1jbHVzdGVycy9tYXJrZXJzLWZvci1jbHVzdGVycy5jb21wb25lbnQnO1xuZXhwb3J0IHtQb3B1cENvbXBvbmVudCBhcyDJtWx9IGZyb20gJy4vbGliL3BvcHVwL3BvcHVwLmNvbXBvbmVudCc7XG5leHBvcnQge0NhbnZhc1NvdXJjZUNvbXBvbmVudCBhcyDJtWt9IGZyb20gJy4vbGliL3NvdXJjZS9jYW52YXMtc291cmNlLmNvbXBvbmVudCc7XG5leHBvcnQge0ZlYXR1cmVDb21wb25lbnQgYXMgybVkfSBmcm9tICcuL2xpYi9zb3VyY2UvZ2VvanNvbi9mZWF0dXJlLmNvbXBvbmVudCc7XG5leHBvcnQge0ltYWdlU291cmNlQ29tcG9uZW50IGFzIMm1aX0gZnJvbSAnLi9saWIvc291cmNlL2ltYWdlLXNvdXJjZS5jb21wb25lbnQnO1xuZXhwb3J0IHtSYXN0ZXJTb3VyY2VDb21wb25lbnQgYXMgybVofSBmcm9tICcuL2xpYi9zb3VyY2UvcmFzdGVyLXNvdXJjZS5jb21wb25lbnQnO1xuZXhwb3J0IHtWZWN0b3JTb3VyY2VDb21wb25lbnQgYXMgybVnfSBmcm9tICcuL2xpYi9zb3VyY2UvdmVjdG9yLXNvdXJjZS5jb21wb25lbnQnO1xuZXhwb3J0IHtWaWRlb1NvdXJjZUNvbXBvbmVudCBhcyDJtWp9IGZyb20gJy4vbGliL3NvdXJjZS92aWRlby1zb3VyY2UuY29tcG9uZW50JzsiXX0=