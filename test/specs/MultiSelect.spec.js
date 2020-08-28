import MultiSelect from 'src/MultiSelect.vue'
import { createVM } from '../helpers/utils.js'
import { assert } from 'chai'

describe('MultiSelect.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `<MultiSelect></MultiSelect>`, { components: { MultiSelect }})

    assert.isObject(vm)
  })
})
