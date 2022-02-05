import AppBarPers from '../material_ui/app_bar'

function PageSchema(props) {

    return (
        <>
            <AppBarPers/>
            {props.children}
        </>
    )
}

export default PageSchema