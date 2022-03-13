import { render, screen, prettyDOM } from '@testing-library/vue'
import Input from './Input.vue'

describe('тестирование базвовго функционала Input', () => {
  test('вывод placeholder', (done) => {
    const DATA = {
      placeholder: 'qwe',
    }
    const { debug } = render(Input, {
      attrs: {
        placeholder: DATA.placeholder,
      },
    })
    const input = screen.getByPlaceholderText(DATA.placeholder)

    console.log(debug, prettyDOM(), 'input')

    if (input) {
      done()
    }
  })
})
