import NavBar from '../../components/NavBar'
import TableMain from '../../components/TableMain'
import LoadingView from '../LoadingView'
import { useDependencias } from '../../hooks/useDependencias'
import { columns } from '../../services/dependencia.service'
import { Button } from '@nextui-org/react'
import { PlusIcon } from '../../icons/PlusIcon'
import { useState } from 'react'
import ModalMain from '../../components/ModalMain'
import CreateDependenciaForm from '../../components/dependencia_components/CreateDependenciaForm'
import RenderDependenciaCell from '../../components/dependencia_components/RenderDependenciaCells'

export default function DependenciasView() {
    const { dependenciasList, isLoading } = useDependencias() //Hook personalizado
    const [modalOpen, setModalOpen] = useState(false);


    if (isLoading) {
        return <LoadingView></LoadingView>//Renderizar vista de carga 
    }


    console.log(dependenciasList)
    return (
        <>
            <NavBar></NavBar>
            <div className="container mx-auto mt-10 p-6 md:p-12 bg-gray-800 rounded-2xl shadow-md" >
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold mb-4">Dependencias</h1>
                    <Button startContent={<PlusIcon />} color='success' onPress={() => setModalOpen(true)}>Crear</Button>
                </div>
                <div>
                    <TableMain data={dependenciasList} columns={columns} renderCell={RenderDependenciaCell}></TableMain>
                </div>
            </div>
            <ModalMain isOpen={modalOpen} close={() => setModalOpen(false)}>
                <CreateDependenciaForm></CreateDependenciaForm>
            </ModalMain>
        </>
    )
}
