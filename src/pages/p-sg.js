import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import tb1 from "../images/sg/tb1.jpg"
import tb2 from "../images/sg/tb2.jpg"
import userstudyimages from "../images/sg/userstudyimages.jpg"



import { Image, Carousel } from "react-bootstrap"
import { Link } from "gatsby"

const cookBurnPage = () => (
  <div>
    <Header></Header>
    <div
      className="container"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingBottom: `200px`,
      }}
    >
      <h2 className="text-center pt-4 pb-2">
        Visualising and Evaluating Outputs of Generative Models
      </h2>
      <p className="text-center text-secondary">Jan 2022 ~ Sept 2022</p>
      <p className="text-center text-secondary">
        Which metrics are the best to evaluate outputs of generative models like
        humans?
      </p>
      <h3 className="pb-2">Abstract </h3>
      <p>
        These days, computers can generate various fake images which look just
        like real images. Generative Adversarial Networks (GANs) are known to be
        the techniques for generating realistic images. Since the generative
        model does not have a loss function, like other deep learning models,
        the methods that suitably evaluate the models are attractive to search.
        Many ways are introduced to assess the output of a generative model,
        such as calculating latent space and human eyes. This project aims to
        evaluate and understand the synthetic images from GANs by computing
        famous quantitative metrics scores and collecting quantitative scores
        from human perception through surveys. Lastly, the results from this
        project could be a valuable tool for increasing the number of many new
        and exciting generative models. According to this project, the study
        metric close to the human perspective is the Precision metric, as its
        score for StyleGAN2 is the best, and StyleGAN2’s outputs are chosen to
        be the most realistic images from the user study. Furthermore, there is
        an interesting fact about images from StyleGAN-XL. While it produces the
        best FID and KID scores, it is ranked worst from the human perspective.
        This contrast in the result allows us to assume why StyleGAN-XL has
        lower FID and KID but still does not produce realistic images for
        humans.
      </p>

      <h3 className="pb-2">
        Evaluate outputs of StyleGAN2, StyleGAN3, and StyleGAN-XL
      </h3>
      <Image src={userstudyimages} className="class-img-top px-5" alt="d2" fluid />
      <h4 className="pb-2 px-5">Quantitative metrics</h4>
      <p className="px-5">
        Three metrics calculate each model's performance in generating realistic
        images: FID, KID, and P&R, where P&R breaks into correlated Precision
        and Recall. The below table presents the mean and standard deviation of
        each score for each model that is calculated ten times. The results show
        that StyleGAN-XL is the best, followed by StyleGAN2 and StyleGAN3 based
        on FID and KID. However, StyleGAN3 is the best model in terms of P&R as
        it has the highest summation of Precision and Recall score (1.19605). If
        observing Precision and Recall metrics separately, StyleGAN2 is the best
        model for generating realistic images (the greatest Precision score)
        while being the worst model for developing diverse images (the lowest
        Recall score).
      </p>
      <h4 className="pb-2 px-5">Qualitative metrics</h4>
      <p className="px-5">
        The full results as a spreadsheet are at{" "}
        <Link to="https://bit.ly/3dJgJao">ggsheet</Link>. The summarized scores
        are being processed in the jupyter notebook, which can be found in our{" "}
        <Link to="https://bit.ly/3D4jQED">GitHub</Link> page for this project.
        The notebook contains basic logic to distinguish the answers to each
        model's scoring as the numerical results. The below table provides the
        summary statistics for each model on how well they can generate
        synthetic images based on the user's perception. Of 1080 possible
        answers (90 participants x 12) for each quality and diversity question,
        StyleGAN2 receives the greatest attention for its realistic output
        (44.81%), followed by StyleGANXL and StyleGAN3, whose scores are almost
        the same. Similarly, participants selected results from the StyleGAN2
        model to have more variety than the rest.
      </p>

      <div className="px-5">
        <Carousel prevLabel nextLabel interval="2000">
          <Carousel.Item>
            <img className="d-block w-100 " src={tb1} alt="First slide" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={tb2}
              alt="Second slide"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <h3 className="pb-2">Result</h3>
      <p>
        The results from qualitative measurement turn out to be similar to only
        the Precision metric. About 45\% of participants selected images from
        StyleGAN2 as the most realistic images, and the highest Precision score
        of 0.68 goes to StyleGAN2. StyleGAN2 is also the most diverse model for
        participants while being the least varied model according to the P&R
        metric. This remarkable fact shows that most users assume that the more
        realistic the model produces images, the more diverse the model can
        create fake human faces. It is worth pointing out that the results from
        the user study will follow the P&R metric if the diversity results of
        StyleGAN3 in above table gets slightly more user votes (3%). While
        StyleGAN-XL has the lowest score among FID and KID, it does not look
        realistic from the human perspective. Almost half of the participants
        from the user study did not choose outputs from StyleGAN-XL as the more
        lifelike images. Most of the comments from userstudy mentioned that
        their skins look too smooth and the position of facial features are
        abnormal such as the angle of smile and face do not get along.
      </p>
      <h3 className="pb-2">Further work</h3>
      <p>
        There are two aspects for the further investigation of this project.
        Firstly, regarding the unmatch results between the metrics and user
        study, StyleGAN-XL has a better FID and KID but is ranked worse by
        participants. The assumption of this result would be because of
        pre-trained class embeddings. Adding this configuration will allow the
        model to train on a larger dataset as it generates more diverse samples
        per class. Using pre-trained networks trained in other datasets like
        Imagenet may allow the StyleGAN-XL model to reduce the FID and KID
        scores; the activations of those pre-trained models can affect the
        metrics. Secondly, the user study results could be more standardised and
        fair. The current version of the user study has three images to compare
        with another three. By comparing six syntheses, some users cannot truly
        judge the diversity of each model. Therefore, one of the further works
        should be redesigning the user study so that it could collect unbias
        data from humans. Also, the images shown in the current version of the
        user study are randomly selected and laid out in each question. It would
        be better to collect the same image types from each model, for instance,
        having the same number of men's faces, a person wearing glasses, and
        children.
      </p>
      <div></div>
    </div>

    <Footer></Footer>
  </div>
)

export default cookBurnPage
