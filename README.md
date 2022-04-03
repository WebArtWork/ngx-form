# ngx-forms

# Step 1: Forms Install
### In root/client you write:
```
waw add ngx-forms
```

# Step 2: Import FormsModule
### In page.module.ts you must imported:
```
import { FormsModule } from 'src/app/modules';

@NgModule({
  imports: [
    FormsModule
  ],
})
```

# Step 3: Component.ts
### In page.component.ts you must write this code:
```
export class your/page {

 public config = {
   title: 'Authorize',
   class: 'webart.work',
   components: [{
     type: 'email',
     label: 'E-mail',
     placeholder: 'fill your email',
     input: 'email'
   }, {
     type: 'password',
     label: 'Password',
     placeholder: 'fill your password',
     input: 'password'
   }, {
     type: 'button',
     label: 'Sign',
     output: 'submit'
   }]
 }

 public doc: any = {};

 sign(qwer) {
   console.log(qwer)
 }

 constructor() { }
}

```

# Step 4: Write Tag(wform)
### In page.component.html you write this code outside of others:
```
<wform [config]="config" [doc]="doc" (submit)="sign($event)"></wform>
```
