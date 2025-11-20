import { motion } from 'motion/react';
import { GraduationCap, Heart, Target, Church } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Освіта та розвиток',
      description: 'Активно навчаюся та розвиваю свої знання, прагну до професійного зростання в галузі державного управління.',
    },
    {
      icon: Target,
      title: 'Кар\'єрні цілі',
      description: 'Мрію працювати у державній структурі, щоб сприяти розвитку країни та покращенню життя громадян.',
    },
    {
      icon: Church,
      title: 'Духовні цінності',
      description: 'Регулярно відвідую богослужіння у грекокатолицькій церкві, що формує мій моральний компас та життєві принципи.',
    },
    {
      icon: Heart,
      title: 'Особисті якості',
      description: 'Відповідальна, цілеспрямована та віддана своїм ідеалам. Вірю в важливість служіння суспільству.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Про мене</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мені 15 років, і я вже маю чітке бачення свого майбутнього. Прагну поєднувати професійний розвиток 
            з глибокими духовними цінностями та служінням своїй країні.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <blockquote className="text-xl md:text-2xl italic mb-4">
            "Служіння народу — це не просто професія, це покликання, яке потребує чесності, 
            відповідальності та глибокої віри в краще майбутнє нашої країни."
          </blockquote>
          <p className="text-blue-100">— Кароліна Русин</p>
        </motion.div>
      </div>
    </section>
  );
}
