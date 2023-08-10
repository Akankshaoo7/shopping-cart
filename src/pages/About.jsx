import Header from "../components/Header";
import fruitOne from "../assets/images/fruits.jpg";
import fruitTwo from "../assets/images/fruits-1.jpg";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header title="About Us" subtitle="All Fruits Are Fresh." />
      <div className="about-page wrapper">
        <p>
          Strawberries are a juicy, red fruit with a high water content. The
          seeds provide plenty of dietary fiber per serving. Strawberries
          contain many healthful vitamins and minerals. Of particular note, they
          contain anthocyanins, which are flavonoids that can help boost heart
          health. The fiber and potassium in strawberries can also support a
          healthy heart.
        </p>
        <p>
          Oranges are a sweet, round citrus fruit packed with vitamins and
          minerals. Limes are a sour citrus fruit that provide a range of health
          benefits. Like other citrus fruits, limes provide a healthful dose of
          vitamin C. They also have similar health benefits, antibacterial, and
          antioxidant properties.
        </p>
        <img src={fruitOne} alt="Fruits" />
        <p>
          Pineapple is an exotic fruit that may help reduce inflammation and
          promote healthy tissue growth. Pineapple contains an active compound
          called bromelain, which many people take as a dietary supplement
          because of its potential health benefits. Many people refer to
          avocados as a superfood because of their healthful qualities. Avocados
          are rich in oleic acid, a monounsaturated fat which helps lower
          cholesterol levels.
        </p>
        <p>
          Lemons are a citrus fruit that people often use in traditional
          remedies because of their health benefits. Like other citrus fruits,
          they contain vitamin C and other antioxidants. Antioxidants are
          essential for human health. These compounds mop up free radicals in
          the body that can damage the body's cells and lead to diseases, such
          as cancers. Researchers believe that the flavonoids in lemon and other
          citrus fruits have antibacterial, anticancer, and antidiabetic
          properties.
        </p>
        <p>
          Grapefruits are sour fruits full of health-inducing vitamins and
          minerals. Grapefruits can be pink, red, or white. Like other berries,
          blackberries contain health-boosting anthocyanins. Blackberries
          contain many seeds, so they have a high fiber content. This means they
          can help improve gut health and heart health. Apples make a quick and
          easy addition to the diet. Eat them with the skin on for the greatest
          health benefits. Apples are high-fiber fruits, meaning that eating
          them could boost heart health and promote weight loss.
        </p>
        <img src={fruitTwo} alt="Fruits" />

        <p>
          Grapefruits are sour fruits full of health-inducing vitamins and
          minerals. Grapefruits can be pink, red, or white. Like other berries,
          blackberries contain health-boosting anthocyanins. Blackberries
          contain many seeds, so they have a high fiber content. This means they
          can help improve gut health and heart health.
        </p>
        <p>
          Apples make a quick and easy addition to the diet. Eat them with the
          skin on for the greatest health benefits. Apples are high-fiber
          fruits, meaning that eating them could boost heart health and promote
          weight loss. The pectin in apples helps to maintain good gut health.
        </p>

        <p>
          The American Heart Association sathaTrusted Source maintaining healthy
          cholesterol levels with healthful fats could reduce the risk of heart
          disease and stroke. Fruits come in all shapes and sizes, and different
          fruits have different health benefits. For the best results, add a
          variety of fruits to the diet. By eating fruit, a person is providing
          their body with key vitamins, antioxidants, and dietary fiber. This
          can have significant benefits for heart health, digestion, weight
          management, and skin health. People can enjoy a wide variety of fruits
          to improve their health and lower the risk of inflammation, heart
          disease, cancer, obesity, and diabetes.
        </p>
        <p>
          Strawberries are a juicy, red fruit with a high water content. The
          seeds provide plenty of dietary fiber per serving. Strawberries
          contain many healthful vitamins and minerals. Of particular note, they
          contain anthocyanins, which are flavonoids that can help boost heart
          health. The fiber and potassium in strawberries can also support a
          healthy heart.
        </p>
        <p>
          Oranges are a sweet, round citrus fruit packed with vitamins and
          minerals. Limes are a sour citrus fruit that provide a range of health
          benefits. Like other citrus fruits, limes provide a healthful dose of
          vitamin C. They also have similar health benefits, antibacterial, and
          antioxidant properties.
        </p>
      </div>
    </div>
  );
}
export default About;
