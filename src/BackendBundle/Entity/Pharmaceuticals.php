<?php

namespace BackendBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


/**
 * @ORM\Entity(repositoryClass="BackendBundle\Entity\Repository\PharmaceuticalsRepository")
 * @ORM\Table(name="pharmaceuticals_table")
 * @Vich\Uploadable
 */
class Pharmaceuticals
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ProductContentBlock", mappedBy="pharma", cascade={"persist"})
     */
    private $contentBlock;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getContentBlock()
    {
        return $this->contentBlock;
    }

    /**
     * @param \Doctrine\Common\Collections\Collection $contentBlock
     */
    public function setContentBlock(\Doctrine\Common\Collections\Collection $contentBlock)
    {
        $this->contentBlock = $contentBlock;
    }

    public function addContentBlock(ProductContentBlock $sl)
    {
        $sl->setPharma($this);
        $this->contentBlock->add($sl);

        return $this;
    }

    public function removeContentBlock(ProductContentBlock $sl)
    {
        $this->contentBlock->removeElement($sl);
    }

    public function __construct() {
        $this->contentBlock = new ArrayCollection();
    }

}