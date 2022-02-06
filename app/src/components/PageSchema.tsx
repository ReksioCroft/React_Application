import AppBarPers from '../material_ui/app_bar'

function PageSchema(props: any) {

    return (
        <>
            <AppBarPers/>
            {props.children}
        </>
    )
}

export default PageSchema
