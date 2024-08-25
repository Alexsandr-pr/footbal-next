import Image from "next/image";
import ContentBlock from "../content-block/ContentBlock";
import "./table.scss";
import Row from "./ui/row/Row";
import Tbody from "./ui/tbody/Tbody";
import Td from "./ui/td/Td";
import Thead from "./ui/thead/Thead";
import { _SERVER_API } from "@/config/consts";

const Table = ({
    title,
    standings
} : {
    title:string;
    standings: {
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
}) => {
    return (
        <ContentBlock 
            buttonText="FULL LEAGUE STANDING"
            size="min" 
            title={title}
        >
            <table className="table">
                <Thead>
                    <Row>
                        <>
                            <Td isBold={true} border="right">#</Td>
                            <Td  border="right">Team</Td>
                            {
                                standings.columns.map(item => {
                                    return (
                                        <Td maxW={"content"} isBold={item.is_bold} key={item.key}>{item.display_name}</Td>    
                                    )
                                })
                            }
                        </>
                    </Row>
                </Thead>
                <Tbody>
                    {
                        standings.rows.map(row => {
                            return (
                                <Row key={row.num}>
                                    <Td type="start" border="right">{row.num}</Td>
                                    <Td type={"team"} border="right">
                                        <Image
                                            height={16}
                                            width={16}
                                            src={`${_SERVER_API}/images/team/${row.entity.object.id}/4`} 
                                            alt={row.entity.object.name}
                                        />
                                        {row.entity.object.name}
                                    </Td>
                                    {
                                        row.values.map((td) => {
                                            return (
                                                <Td maxW={"content"} key={td.key}>{td.value}</Td>
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

export default Table