
import PageLayoutTable from "@/components/page-layout/PageLayoutTable";
import "./title-ranking-history.scss";
import BlockBackground from "@/components/ui/block-bg/BlockBackground";
import Table from "@/components/table/Table";
import { standings } from "../_data/data";

function TitleRankingHistory() {
    return (
        <>
            <PageLayoutTable
                childrenLeft={<>
                
                    <BlockBackground>
                        <Table nameMainTable={"Jugador"} showNumber={false} showBorder standings={standings}/>
                    </BlockBackground>
                </>}
                childrenRight={<></>}
            />
        </>
    )
}

export default TitleRankingHistory;