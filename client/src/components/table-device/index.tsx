import styled from "styled-components";

const Table = styled.table`
    width: 100%;
`

const TableDevice = (props: object) => {
    return (
        <Table>
            {
                Object.keys(props).map(key =>
                    <tr>
                        <td>{key}:</td>
                        <td>{props[key as keyof object]}</td>
                    </tr>
                )
            }
        </Table>
    )
}

export default TableDevice;