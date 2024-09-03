
import ContentBlock from "../content-block/ContentBlock";
import "./table.scss";
import Row from "./ui/row/Row";
import Tbody from "./ui/tbody/Tbody";
import Td from "./ui/td/Td";
import Thead from "./ui/thead/Thead";
import { _SERVER_API } from "@/config/consts";

const Table = ({
    standings,
    showNumber,
    showBorder,
    buttonText
} : {
    standings?: {
        title:string;
        columns: {
            key: string;
            display_name: string;
            is_bold: boolean;
        }[];
        rows: {
            num: number;
            entity: {
                type: number;
                object: {
                    name: string;
                    url_name: string;
                    id: string;
                    country_id: string;
                };
            };
            values: {
                key: string;
                value: string;
            }[];
        }[];
    };
    showNumber?: boolean;
    showBorder?:boolean;
    buttonText?:string;
}) => {

    const boldColumns = standings?.columns.reduce((acc, column, index) => {
        if (column.is_bold) {
            acc.push(index);
        }
        return acc;
    }, [] as number[]);

    return (
        <ContentBlock 
            border={showBorder}
            buttonText={buttonText ? buttonText : ""}
            size="min" 
            title={standings?.title}
        >
            <table className="table">
                <Thead>
                    <Row>
                        <>
                            {
                                !showNumber ? null : <>
                                    <Td 
                                        isBold={"bold"} 
                                        border="right"
                                    >
                                        #
                                    </Td>
                                </>
                            }
                            <Td 
                                
                                team="team team-center" 
                                border="right"
                            >
                                Team
                            </Td>
                            {
                                standings?.columns.map((item, index) => {
                                    return (
                                        <Td 
                                        
                                            border={index === 0 ? "right" : undefined} 
                                            maxW={"content"} 
                                            isBold={item.is_bold && "bold"} 
                                            className={!item.is_bold ? "grey-70" : undefined}
                                            key={item.key}
                                        >
                                            {item.display_name}
                                        </Td>    
                                    )
                                })

                            }
                        </>
                    </Row>
                </Thead>
                <Tbody>
                    {/* <Row>
                        <Td type="green" colSpan={5}>
                        DECADA 2020
                        </Td>
                    </Row> */}
                    {
                        standings?.rows.map(row => {
                            return (
                                <Row key={row.num}>
                                    <Td 
                                        isBold={"bold"} 
                                        type="start" 
                                        border="right"
                                    >
                                        {row.num}
                                    </Td>
                                    <Td 
                                        team={"team"} 
                                        border="right"
                                    >
                                        <div className="table-team-image-block">
                                            <img
                                                className="table-team-image"
                                                height={16}
                                                width={16}
                                                src={`${_SERVER_API}/images/team/${row.entity.object.id}/4`} 
                                                alt={row.entity.object.name}
                                            />
                                        </div>
                                        {row.entity.object.name}
                                    </Td>
                                    {
                                        row.values.map((td, index) => {
                                            const isBold = boldColumns?.includes(index);
                                            return (
                                                <Td 
                                                    border={index === 0 ? "right" : undefined} 
                                                    maxW={"content"} 
                                                    key={td.key}
                                                    isBold={isBold ? "bold" : undefined}
                                                    className={!isBold ? "grey-70" : undefined}
                                                >
                                                    {td.value}
                                                </Td>
                                            )
                                        })
                                    }
                                </Row>
                            )
                        })
                    }
                </Tbody>
            </table>
            
        </ContentBlock>
    )
}

export default Table;
