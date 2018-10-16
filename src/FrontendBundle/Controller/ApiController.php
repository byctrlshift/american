<?php

namespace FrontendBundle\Controller;

use BackendBundle\Entity\Seo;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class ApiController extends Controller
{
    private function formalizeJSONResponse($data, $exclude)
    {
        $normalizer = new ObjectNormalizer();
        $normalizer->setIgnoredAttributes($exclude);
        $serializer = new Serializer([$normalizer], [new JsonEncoder()]);

        $response = new Response($serializer->serialize($data, 'json'));
        $response->headers->set('Content-Type', 'application/json; charset=UTF-8');

        return $response;
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/about", name="about")
     * @Route("/services", name="services")
     * @Route("/blog", name="blog")
     * @Route("/contacts", name="contacts")
     */
    public function indexAction()
    {
//        $em = $this->getDoctrine()->getManager();


        return $this->render('@Frontend/home/index.html.twig');
    }

    /**
     * @Route("/api/seo/{page}", name="api-seo")
     */
    public function getSeo($page)
    {
        $em = $this->getDoctrine()->getManager();

        $seo = $em->getRepository(Seo::class)->findOneBy(['slug' => $page]);

        return $this->formalizeJSONResponse($seo, ['id']);
    }

    /**
     * @Route("/api/links", name="api-header-links")
     */
    public function getHeader()
    {
        $links = [
            'home' => $this->generateUrl('homepage'),
            'about' => $this->generateUrl('about'),
            'contacts' => $this->generateUrl('about'),
            'blog' => $this->generateUrl('about')
        ];

        $response = new Response(json_encode($links, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        $response->headers->set('Content-Type', 'application/json; charset=UTF-8');

        return $response;
    }
}
