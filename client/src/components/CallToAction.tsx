import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="bg-muted/50 rounded-2xl p-1">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to collaborate on your next digital experience? I'm excited to bring your vision to life through thoughtful design and user-centered solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold h-auto"
              >
                <a
                  href="mailto:vedansh.wandalkar@gmail.com?subject=Hello%20%E2%98%95%EF%B8%8F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold h-auto"
              >
                <a
                  href="https://www.linkedin.com/in/vedansh-wandalkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
