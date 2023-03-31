
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { ShaixuanceshiEntity } from './entities/shaixuanceshientity';

import { ShaixuanceshiProxy } from './shaixuanceshiproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/yyy3/yyy3mk1/v1.0/shaixuanceshiform_frm',
    entityType: ShaixuanceshiEntity
})
export class ShaixuanceshiRepository extends BefRepository<ShaixuanceshiEntity> {
    public name = 'ShaixuanceshiRepository';

    public proxy: ShaixuanceshiProxy;
    public paginationInfo = {
        ShaixuanceshiEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(ShaixuanceshiProxy, null);
    }
}