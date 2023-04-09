import axios from 'axios';
import { MouseEvent, useEffect, useState } from 'react'
import { IListDataType } from './WikiMain.type';
import { API } from '../../../common/api/api';
import WikiMainUI from './WIkiMain.presenter';

const WikiMain = () => {
    const [pagiCount, setPagiCount] = useState<number>(1)
    const [listData, setListData] = useState<IListDataType[]>()
    const [countData, setCountData] = useState()

    const pagiNationNum = Array(5).fill(1)

    const lastPage = (countData !== undefined) ? Math.ceil(countData / 5) : 0

    const paginationHandler = async (e: MouseEvent<HTMLSpanElement>) => {
        try {
            await axios.get(`${API}/wiki?offset=${Number(e.currentTarget.id)}`)
                .then(res => {
                    const { data } = res
                    if (data) {
                        setListData(data.data.getWiki)
                        setCountData(data.data.wikiCount.count)
                    }
                })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error)
            }
        }
    }

    const pagiNextCountHandler = () => {
        if (pagiCount + 5 <= lastPage) {
            setPagiCount(prev => prev + 5)
        }
    }

    const pagiPrevCountHandler = () => {
        if (pagiCount !== 1) {
            setPagiCount(prev => prev - 5)
        }
    }

    useEffect(() => {
        const getListData = async () => {
            try {
                axios.get(`${API}/wiki?offset=${pagiCount}`)
                    .then(res => {
                        const { data } = res
                        if (data) {
                            setListData(data.data.getWiki)
                            setCountData(data.data.wikiCount.count)
                        }
                    })
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)
                }
            }
        }
        getListData();
    }, [pagiCount])

    return (
        <WikiMainUI
            pagiNationNum={pagiNationNum}
            paginationHandler={paginationHandler}
            pagiNextCountHandler={pagiNextCountHandler}
            pagiPrevCountHandler={pagiPrevCountHandler}
            listData={listData}
            pagiCount={pagiCount}
            lastPage={lastPage}
        />
    )
}

export default WikiMain