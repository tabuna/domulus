# Domulus
Manipulation of DOM on stimulus js

## Installation

```
npm install -s ...
```


## Usage

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
