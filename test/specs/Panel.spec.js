import Panel from 'src/Panel.vue'
import { createVM } from '../helpers/utils.js'
import { assert } from 'chai'

describe('Panel.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `<Panel></Panel>`, { components: { Panel }})

    assert.isObject(vm)
  })
})
