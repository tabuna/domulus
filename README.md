# Domulus
Manipulation of DOM on stimulus js

### Example

##### controller

```javascript
import {Controller} from "stimulus"
import Domulus      from 'dumulus'

export default class extends Controller {

    static targets = ["source"];

    connect() {
        Domulus.connect(this);
    }

    disconnect() {
        Domulus.disconnect(this);
    }
```

##### html


```html
<div data-controller="example">
 <input data-target="example.source" type="text" value="1">
  <div data-show="example.source != 1">
    <h1>Show text only value 1 or true </h1>
  </div>
</div>
```
