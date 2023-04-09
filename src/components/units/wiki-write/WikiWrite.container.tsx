import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../../common/api/api'
import { IDefaultDataType, IFormDataType } from './WikiWrite.type'
import WikiWriteUI from './WikiWrite.presenter'

const WikiWrite = () => {
    const getURL = useParams()
    const getId = getURL.id ?? ''
    const navigate = useNavigate();

    const [formData, setFormData] = useState<IFormDataType>({
        title: '',
        subtitle: '',
        content: ''
    })

    const [defaultData, setDefaultData] = useState<IDefaultDataType>()

    // 등록하기 & 수정하기 버튼 이벤트 함수
    const confirmHandler = async (id: number) => {
        try {
            if (getId === 'create') {
                await axios.post(`${API}/wiki`, {
                    title: formData.title,
                    subtitle: formData.subtitle,
                    content: formData.content
                })
                    .then(res => {
                        const { data } = res
                        if (data) {
                            console.log(data.message)
                            navigate('/');
                        }
                    })
            } else {
                await axios.put(`${API}/wiki`, {
                    id,
                    title: formData.title ? formData.title : defaultData?.title,
                    subtitle: formData.subtitle ? formData.subtitle : defaultData?.subtitle,
                    content: formData.content ? formData.content : defaultData?.content,
                })
                    .then(res => {
                        const { data } = res
                        if (data) {
                            console.log(data.message)
                            navigate(`/detail/${getId}`);
                        }
                    })
            }

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    }

    // onChange 이벤트 함수
    const onChangeHandler = (formDataKey: string, formDataValue: string) => {
        setFormData(prev => ({
            ...prev,
            [formDataKey]: formDataValue
        }))
    }


    useEffect(() => {
        const getDefaultData = async () => {
            if (getId !== 'create') {
                try {
                    await axios.get(`${API}/wiki/detail?id=${getId}`)
                        .then(res => {
                            const { data } = res
                            if (data) {
                                setDefaultData(data.data.getWikiDetail)
                            }
                        })
                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message)
                    }
                }
            }
        }
        getDefaultData()
    }, [getId])

    return (
        <WikiWriteUI
            getId={getId}
            onChangeHandler={onChangeHandler}
            defaultData={defaultData}
            confirmHandler={confirmHandler}
        />
    )
}

export default WikiWrite