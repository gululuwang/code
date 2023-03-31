
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '筛选测试',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'birthday',
        name: "{{birthday_ccb12f7e_63xw}}",
        binding: 'birthday',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '生日',
    })
    birthday: FormControl;

}