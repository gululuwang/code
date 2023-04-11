
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { TestCardFormFrmControllerService as TestCardFormFrmControllerService1 } from '../../services/testcardform_frm_controller';

@Injectable()
@NgCommandHandler({
    commandName: 'basicformviewmodelmethod21'
})
export class basicformviewmodelmethod21Handler extends CommandHandler {
    constructor(
        public _TestCardFormFrmControllerService1: TestCardFormFrmControllerService1
    ) {
        super();
    }

    schedule() {
        this.addTask('method2', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._TestCardFormFrmControllerService1, 'method2', args, context);
        });

    }
}