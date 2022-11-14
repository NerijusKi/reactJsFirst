import Article from "../article/Article";

const Main = ()=>{
    return(

            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <Article
                        icon = "bi bi-collection"
                        title = "Fresh new layout"
                        description = "With Bootstrap 5, we've created a fresh new layout for this template!"
                        />
                        <Article
                            icon = "bi bi-cloud-download"
                            title = "Free to download"
                            description = "As always, Start Bootstrap has a powerful collectin of free templates."
                        />
                        <Article
                            icon = "bi bi-card-heading"
                            title = "Fresh new layout"
                            description = "With Bootstrap 5, we've created a fresh new layout for this template!"
                        />
                        <Article
                            icon = "bi bi-bootstrap"
                            title = "Feature boxes"
                            description = "We've created some custom feature boxes using Bootstrap icons!<"
                        />
                        <Article
                            icon = "bi bi-collection"
                            title = "Fresh new layout"
                            description = "With Bootstrap 5, we've created a fresh new layout for this template!"
                        />
                        <Article
                            icon = "bi bi-collection"
                            title = "Fresh new layout"
                            description = "With Bootstrap 5, we've created a fresh new layout for this template!"
                        />
                    </div>
                </div>
        </section>
    )
}

export default Main