import styled, { createGlobalStyle } from 'styled-components'

export const Flex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'stretch'};
	align-items: ${props => props.items || 'stretch'};
	gap: ${props => props.gap + 'px' || '0'};
	height: ${props => props.h || 'auto'};
`
export const Global = createGlobalStyle`
	body{
		padding:0;
		margin: 0;
		
		*{
			box-sizing: border-box;
		}
	}
`