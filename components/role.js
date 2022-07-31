import styled from '@emotion/styled';

const Role = styled.p`
white-space: nowrap;

transform: ${props => props.flag==='developer' ? 'translateY(255%) rotate(-90deg)' : 'translateY(175%) rotate(-90deg)'};
font-size: ${props => props.flag==='developer' ? '50px' : '60px'};
background-color: ${props => props.flag==='developer' ? 'transparent' : '#009F93'};
`

export default Role;