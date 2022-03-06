import styled from "styled-components";

const Table = styled.table`
    width: 100%;
`

const TableDevice = (props: object) => {
    return (
        <Table>
            <tbody>
                {
                    Object.keys(props).map(key =>
                        <tr key={key}>
                            <td>{key}:</td>
                            <td>{props[key as keyof object]}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default TableDevice;