import { Form as FormikForm, Field } from 'formik'
import { styled } from 'linaria/react'
import { rgba } from 'polished'
import { StylesConfig, Theme } from 'react-select'

import { colors } from '../../../styles/colors'

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 0 20rem;
  gap: 1rem;
  input {
    height: 4rem;
  }
  button {
    height: 5rem;
    margin-bottom: 1rem;
  }
`

export const Input = styled(Field)`
  border-radius: 3px;
  background: none;
  border: 1px solid ${colors.lighterGray};
  font-size: 1.4rem;
  color: ${colors.lighterBlack};
  font-family: inherit;
  padding: 0 2rem;
  transition: 0.1s border ease;
  &:focus {
    border: 1px solid ${colors.main};
  }
`

export const Textarea = styled.textarea`
  padding: 1rem 2rem;
  resize: vertical;
  border-radius: 3px;
  background: none;
  border: 1px solid ${colors.lighterGray};
  font-size: 1.4rem;
  color: ${colors.lighterBlack};
  font-family: inherit;
  line-height: 2rem;
  transition: 0.1s border ease;
  &:focus {
    border: 1px solid ${colors.main};
  }
`

export const customSelectStyles: StylesConfig = {
  option: (provided, state) => ({
    ...provided
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    borderRadius: '3px',
    fontSize: '1.4rem',
    border: `1px solid ${state.isFocused ? colors.main : colors.lighterGray}`
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0 2rem'
  }),
  singleValue: () => ({
    fontSize: '1.4rem',
    color: colors.lighterBlack
  }),
  menuList: provided => ({
    ...provided,
    fontSize: '1.4rem',
    color: colors.lighterBlack
  })
}

export const selectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: rgba(colors.main, 0.1),
    primary: colors.main
  }
})
