<template>
  <fieldset
    class="textarea-wrapper"
    :class="{ 'textarea-wrapper_focused': focus }"
  >
    <legend :class="{ legend_hidden: !localValue && !focus }">
      {{ label }}
    </legend>
    <label
      v-if="label"
      class="input__label"
      :class="{ input__label_down: !value && !focus }"
      for="textarea"
      >{{ label }}</label
    >
    <textarea
      id="textarea"
      v-model="localValue"
      class="textarea"
      :placeholder="localPlaceholder"
      v-bind="$attrs"
      @focus="focus = true"
      @blur="focus = false"
    />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Textarea',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: [String],
      default: '',
    },
    placeholder: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, context) {
    const focus = ref<boolean>(false)

    const localValue = computed({
      get: () => props.value,
      set: (val) => context.emit('update:value', val),
    })

    const localPlaceholder = computed(() =>
      !focus.value && props.label ? '' : props.placeholder
    )

    return { focus, localValue, localPlaceholder }
  },
})
</script>

<style scoped lang="scss">
.textarea-wrapper {
  color: var(--color-main-text);
  border: 2px solid currentColor;
  .textarea {
    resize: none;
    width: 100%;
    font-size: 22px;
    border: 0;
    margin-bottom: 4px;
    height: 100%;
    padding: 4px 8px;
    &:focus {
      outline: none;
    }
  }
  .input__label {
    position: absolute;
    top: -14px;
    left: 10px;
    font-size: 14px;
    font-weight: 500;
    transition: 0.2s;
  }
  .input__label_down {
    top: 7px;
    font-size: 18px;
  }
}
.textarea-wrapper_focused {
  border-color: var(--color-primary);
  .input__label {
    color: var(--color-primary);
  }
}
</style>
