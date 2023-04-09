import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API } from '../../../common/api/api'
import { IAllTitleNameData, IItemDataType } from './WikiDetail.type'
import WikiDetailUI from './WikiDetail.presenter'

const WikiDetail = () => {
    const [itemData, setItemData] = useState<IItemDataType>()
    const [allTitleNameData, setAllTitleNameData] = useState<IAllTitleNameData[]>()
    const GET_URL = useParams()
    const getId = GET_URL.list_id ?? ''

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const getWikiData = async () => {
            try {
                await axios.get(`${API}/wiki/detail?id=${getId}`)
                    .then(res => {
                        const { data } = res
                        if (data) {
                            setItemData(data.data.getWikiDetail)
                            setAllTitleNameData(data.data.getWikiTitle)
                        }
                    })
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)
                }
            }
        }
        getWikiData()
    }, [getId])

    return (
        <WikiDetailUI
            itemData={itemData}
            getId={getId}
            allTitleNameData={allTitleNameData}
        />
    )
}

export default WikiDetail