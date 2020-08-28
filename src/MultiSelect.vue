<template>
  <div :class="{'invalid' : isInvalid}">
    <label>
     {{ label }}
    </label>
    <multiselect
      v-model="selectedOption"
      :disabled="disabled"
      select-label="Selecione"
      selected-label="Selecionado"
      deselect-label="Deselecionar"
      :placeholder="placeholder"
      :track-by="trackBy"
      :label="label"
      open-direction="bottom"
      :block-keys="['Delete']"
      :custom-label="label"
      :options="options"
      :multiple="multiple"
      :searchable="true"
      :loading="isLoading"
      :close-on-select="true"
      :internal-search="true"
      :clear-on-select="true"
      :options-limit="30"
      :limit="30"
      :max-height="600"
      :show-no-results="true"
      :hide-selected="false"
      @input="input()"
      @search-change="asyncFind"
    >

      <template
        slot="clear"
        slot-scope="props"
      >
        <div
          v-if="isMultipleAnds"
          class="multiselect__clear"
          @mousedown.prevent.stop="clearAll(props.search)">
        </div>
      </template>
      <span slot="noResult">
        {{ $t('no_results') }}
      </span>
      <span slot="noOptions">
        {{ searchable ? $t('write_a_search') : $t('no_options') }}
      </span>
    </multiselect>
    <label
      v-show="isInvalid"
      class="invalid-feedback d-block form__label"
    >
      {{ invalidFeedback }}
    </label>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import translator from '../src/mixins/translator'
import Multiselect from 'vue-multiselect'

export default {
  name: 'VueTableTagSelect',
  mixins: [translator],
  components: { Multiselect },
  props: {
    api: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    placeholder: {
      type: String,
      default () {
        return translator.methods.$t('search')
      }
    },
    invalidFeedback: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    trackBy: {
      type: String
    },
    state: {
      type: Boolean,
      default () {
        return null
      }
    },
    searchable: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      selectedOption: [],
      options: [],
      isLoading: false
    }
  },
  computed: {
    isInvalid () {
      return this.state === false
    },
    isMultipleAnds () {
      if (this.multiple) {
        if (this.selectedOption.length > 0) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    input () {
      this.$nextTick(function () {
        this.$emit('input', this.selectedOption)
      })
    },
    asyncFind (term) {
      this.isLoading = true
    },
    clearAll () {
      this.selectedOption = []
    }
  }
}
</script>
